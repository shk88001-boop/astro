export async function handler(event) {
  console.log("event", event);
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const body = JSON.parse(event.body);
  console.log("body", body);

  try {
    const response = await fetch(
      process.env.WEBHOOK_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const text = await response.text();
    console.log("text", text);

    return {
      statusCode: response.status,
      body: text,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }
}
