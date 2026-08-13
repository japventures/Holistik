import assert from "node:assert/strict";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the public HOLISTIK website", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Delicious by nature/);
  assert.match(html, /Functional by design/);
  assert.match(html, /Explore the deck/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("server-renders the strategic deck", async () => {
  const response = await render("/deck");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Strategic Brand &amp; Innovation Book/);
  assert.match(html, /Build the platform/);
  assert.match(html, /R&amp;D philosophy/);
});

test("starter preview was removed", async () => {
  await assert.rejects(import("node:fs/promises").then(({ access }) => access(new URL("app/_sites-preview", templateRoot))));
});
