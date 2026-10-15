import { findUrlByShortCode } from "../../lib/db";
import { recordClick } from "../../lib/stats";

export async function GET(request, { params }) {
  const { shortCode } = await params;

  const originalUrl = await findUrlByShortCode(shortCode);

  // originalUrl이 존재하지 않는 경우 404 Not Found 응답을 반환
  if (!originalUrl) {
    console.warn("Short URL not found", { shortCode }); // 서비스를 운영하는 사람이 확인하는 기록

    return new Response("Not Found", { status: 404 });
  }

  // [week06] 클릭 기록과 로그 추가
  try {
    await recordClick(shortCode);
  } catch (error) {
    console.error("Failed to record click", { shortCode });
  }

  // 원본 URL로 리다이렉트
  return new Response(null, {
    status: 307,
    headers: {
      Location: originalUrl,
      "Cache-Control": "no-store",
    },
  });
}


