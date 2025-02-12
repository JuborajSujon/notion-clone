"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function DocumentsPage() {
  const router = useRouter();
  const { user } = useUser();

  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({
      title: "Untitled",
    }).then((documentId) => router.push(`/documents/${documentId}`));
    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created successfully",
      error: "Failed to create a new note",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height={300}
        width={300}
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height={300}
        width={300}
        alt="Empty"
        className="dark:block hidden"
      />

      <h2 className="text-lg font-medium">
        Welcome, {`${user?.lastName}`}&apos;s Jotion
      </h2>

      <Button onClick={onCreate}>
        <PlusCircle className="w-6 h-6 mr-2" />
        Create a note
      </Button>
    </div>
  );
}
