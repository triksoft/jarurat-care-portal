import { useState } from "react";
import type { FormEvent } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const initialMessage: Message = {
  role: "assistant",
  content:
    "Hi! I'm the Jarurat Care AI Assistant. I can help you understand our support services, request support, volunteer registration, and how to use this website. How can I help you?",
};

function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (event: FormEvent) => {
    event.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput || loading) {
      return;
    }

    const userMessage: Message = {
      role: "user",
      content: trimmedInput,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const history = messages
        .filter((message) => message !== initialMessage)
        .map((message) => ({
          role: message.role === "assistant" ? "model" : "user",
          parts: [
            {
              text: message.content,
            },
          ],
        }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedInput,
          history,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.reply,
      };

      setMessages((currentMessages) => [
        ...currentMessages,
        assistantMessage,
      ]);
    } catch (error) {
      console.error(error);

      const errorMessage: Message = {
        role: "assistant",
        content:
          "Sorry, I couldn't connect to the AI assistant right now. Please try again.",
      };

      setMessages((currentMessages) => [
        ...currentMessages,
        errorMessage,
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-[calc(100dvh-72px)] min-h-[560px] bg-slate-50 px-3 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto flex h-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="shrink-0 border-b border-slate-200 bg-white px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl"
              aria-hidden="true"
            >
              🤖
            </div>

            <div className="min-w-0">
              <h1 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                Jarurat Care AI Assistant
              </h1>

              <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                Support for using the Jarurat Care portal
              </p>
            </div>
          </div>
        </div>

        <div
          className="min-h-0 flex-1 space-y-4 overflow-y-auto bg-slate-50/60 p-4 sm:p-5"
          aria-live="polite"
          aria-label="Conversation"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm sm:max-w-[80%] ${
                  message.role === "user"
                    ? "rounded-br-md bg-blue-600 text-white"
                    : "rounded-bl-md border border-slate-200 bg-white text-slate-700"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                Jarurat Care AI is thinking...
              </div>
            </div>
          )}
        </div>

        <div className="shrink-0 border-t border-slate-200 bg-white p-3 sm:p-4">
          <form
            onSubmit={sendMessage}
            className="flex items-stretch gap-2 sm:gap-3"
          >
            <label htmlFor="ai-message" className="sr-only">
              Ask the Jarurat Care AI Assistant
            </label>

            <input
              id="ai-message"
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about support, volunteering, or the website..."
              disabled={loading}
              autoComplete="off"
              className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none active:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300 sm:px-5"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>

          <p className="mt-2.5 text-center text-[11px] leading-5 text-slate-400 sm:text-xs">
            This assistant provides general website information and is not a
            substitute for professional medical care.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AIAssistant;