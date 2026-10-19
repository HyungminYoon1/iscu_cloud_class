// lib/authorization.js
// 인가(Authorization): 인증된 사용자가 특정 기능을 사용할 권한이 있는지 확인합니다.

const ROLE_PERMISSIONS = {
  admin: ["admin:page", "stats:read"],
};

export function authorize(user, permission) {
  if (!user) {
    return false;
  }

  const permissions = ROLE_PERMISSIONS[user.role] ?? [];

  // 인가 조건: 현재 role이 permission을 가지고 있는지 확인
  return permissions.includes(permission);
}
