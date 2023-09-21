import { NextResponse } from "next/server";

type Props = {
  name?: String;
  email?: String;
  message?: String;
};
export async function POST(request: Request) {
  const data: Props = await request.json();

  console.log(data);

  const { name, email, message } = data;

  return NextResponse.json({ name, email, message });
}
