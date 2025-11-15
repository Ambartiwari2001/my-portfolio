

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {

    return NextResponse.json({ message: "Success" }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}