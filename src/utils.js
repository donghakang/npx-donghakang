// Terminal hyperlink (OSC 8)
export function link(url, text) {
  return `\x1b]8;;${url}\x07${text || url}\x1b]8;;\x07`;
}

// Visual width (CJK/emoji = 2, else 1)
export function vw(str) {
  let w = 0;
  for (const ch of str) {
    const c = ch.codePointAt(0);
    if (c === 0x200d) continue;
    if (c >= 0xfe00 && c <= 0xfe0f) continue;
    if (c >= 0x1f3fb && c <= 0x1f3ff) continue;
    if (c >= 0x0300 && c <= 0x036f) continue;
    if (
      (c >= 0xac00 && c <= 0xd7af) ||
      (c >= 0x1100 && c <= 0x11ff) ||
      (c >= 0x3000 && c <= 0x9fff) ||
      (c >= 0xf900 && c <= 0xfaff) ||
      (c >= 0xfe30 && c <= 0xfe4f) ||
      (c >= 0x1f300 && c <= 0x1faff) ||
      (c >= 0x20000 && c <= 0x2fa1f)
    )
      w += 2;
    else w += 1;
  }
  return w;
}
