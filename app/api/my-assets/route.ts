import { NextResponse } from 'next/server';
import db from '@/lib/database';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const owner = searchParams.get('owner');

  if (!owner) {
    return NextResponse.json({ error: 'Missing owner query parameter' }, { status: 400 });
  }

  try {
    const assets = await db.localIPAsset.findMany({
      where: { ownerAddress: owner.toLowerCase() },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ assets });
  } catch (error: any) {
    console.error('Failed to fetch local assets:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
