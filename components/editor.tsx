"use client";

import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

interface EditorProps {
  onChange: (content: string) => void;
  initialContent?: string;
  editable?: boolean;
}

export default function Editor({
  onChange,
  initialContent,
  editable,
}: EditorProps) {
  const { resolvedTheme } = useTheme();

  // Initialize the editor with optional initial content
  const editor = useCreateBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
  });

  return (
    <div>
      <BlockNoteView
        editor={editor}
        editable={editable ?? true} // Default to editable
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={() => {
          const content = JSON.stringify(editor.document);
          onChange(content);
        }}
      />
    </div>
  );
}
