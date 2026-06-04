import { NextResponse } from 'next/server';

export function POST() {
  try {
    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
