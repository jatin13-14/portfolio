"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircleQuestion, X, Send, Sparkles } from "lucide-react";
import { answerQuestion, suggestedQuestions } from "@/lib/ai-knowledge";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "assistant"; text: string };

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  text: "Ask me anything about Jatin's projects, stack, or experience — this runs on a local knowledge base, no API key required.",
};

export function AskPortfolio() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const ask = (question: string) => {
    if (!question.trim()) return;
    // NOTE: this is a local, static responder (see lib/ai-knowledge.ts).
    // To use a real LLM instead, POST `question` to a server route that
    // holds the API key server-side, and set the response text below.
    const answer = answerQuestion(question);
    setMessages((prev) => [...prev, { role: "user", text: question }, { role: "assistant", text: answer }]);
    setInput("");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-4 py-3 text-sm font-medium text-[var(--bg)] shadow-lg transition-transform duration-300 ease-smooth hover:scale-105 sm:bottom-8 sm:right-8",
          open && "pointer-events-none scale-90 opacity-0"
        )}
        aria-label="Ask my portfolio"
      >
        <Sparkles className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">Ask my portfolio</span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Ask my portfolio assistant"
          className="fixed inset-x-4 bottom-4 z-50 flex max-h-[32rem] flex-col overflow-hidden rounded-xl2 border border-[var(--border)] bg-[var(--bg-raised)] shadow-2xl sm:inset-auto sm:bottom-8 sm:right-8 sm:w-96"
        >
          <div className="flex items-center justify-between border-b border-[var(--border-soft)] px-4 py-3">
            <div className="flex items-center gap-2">
              <MessageCircleQuestion className="h-4 w-4 text-[var(--fg-dim)]" aria-hidden="true" />
              <p className="text-sm font-medium text-[var(--fg)]">Ask my portfolio</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
              className="rounded-full p-1 text-[var(--fg-faint)] transition-colors hover:text-[var(--fg)]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed",
                  message.role === "assistant"
                    ? "bg-[var(--bg)] text-[var(--fg-dim)]"
                    : "ml-auto bg-[var(--fg)] text-[var(--bg)]"
                )}
              >
                {message.text}
              </div>
            ))}
          </div>

          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-2 border-t border-[var(--border-soft)] px-4 py-3">
              {suggestedQuestions.slice(0, 3).map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => ask(question)}
                  className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--fg-dim)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--fg)]"
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(event) => {
              event.preventDefault();
              ask(input);
            }}
            className="flex items-center gap-2 border-t border-[var(--border-soft)] p-3"
          >
            <label htmlFor="ask-portfolio-input" className="sr-only">
              Ask a question
            </label>
            <input
              id="ask-portfolio-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about a project, stack, or role…"
              className="flex-1 rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm text-[var(--fg)] outline-none focus-visible:border-[var(--accent)]"
            />
            <button
              type="submit"
              aria-label="Send question"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--fg)] text-[var(--bg)] transition-opacity hover:opacity-90"
            >
              <Send className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
