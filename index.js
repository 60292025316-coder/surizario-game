// Cloudflare Workers エントリーポイント
// / へのリクエストに 蛇ゲーム.html の内容を返す

import html from './蛇ゲーム.html';

export default {
  fetch(request) {
    return new Response(html, {
      headers: { 'Content-Type': 'text/html; charset=UTF-8' },
    });
  },
};
