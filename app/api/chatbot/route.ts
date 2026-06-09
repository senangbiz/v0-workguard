import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, projectId, appName } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    const secretKey = process.env.VERTEX_AI_SECRET_KEY

    if (!secretKey) {
      console.error("[v0] VERTEX_AI_SECRET_KEY not configured")
      return NextResponse.json(
        { response: "I'm currently unavailable. Please try again later." },
        { status: 200 }
      )
    }

    // Call Vertex AI Generative AI API
    // Documentation: https://cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/api-quickstart
    
    const vertexAiUrl = `https://us-central1-aiplatform.googleapis.com/v1/projects/${projectId}/locations/us-central1/publishers/google/models/gemini-pro:generateContent`

    const response = await fetch(vertexAiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secretKey}`,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are Petra, WorkGuard's AI assistant for workforce compliance in Malaysia. You help employers and workers with questions about:
- Permit tracking and management
- Document verification (passports, PLKS, ePass)
- WhatsApp notifications and alerts
- Compliance requirements for foreign workers
- Employment documentation
- AI-powered document OCR features
- Worker management and profiles
- Regulatory compliance

User question: ${message}

Provide helpful, concise answers focused on WorkGuard's features and workforce compliance in Malaysia.`,
              },
            ],
          },
        ],
      }),
    })

    if (!response.ok) {
      console.error("[v0] Vertex AI API error:", response.statusText)
      return NextResponse.json(
        { response: "I'm having trouble processing your request. Please try again." },
        { status: 200 }
      )
    }

    const data = await response.json()

    // Extract the text response from Vertex AI
    const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                       "I'm not sure how to respond to that. Could you ask something else?"

    return NextResponse.json({ response: textContent })
  } catch (error) {
    console.error("[v0] Chatbot API error:", error)
    return NextResponse.json(
      { response: "An error occurred. Please try again later." },
      { status: 200 }
    )
  }
}
