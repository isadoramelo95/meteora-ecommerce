import { NextResponse } from "next/server";
import { getTodosProdutos } from "@/lib/api";

export async function GET(request, context) {
  const { params } = context;
  const produtos = getTodosProdutos();
}
