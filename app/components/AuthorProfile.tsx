type AuthorProfileProps = {
  author: {
    name: string;
    bio: string;
    avatarUrl: string;
  };
};

export default function AuthorProfile({ author }: AuthorProfileProps) {
  return (
    <div className="flex items-center gap-4 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
      <img
        src={author.avatarUrl}
        alt={author.name}
        className="w-16 h-16 rounded-full object-cover shrink-0"
      />
      <div>
        <p className="font-bold text-neutral-900 dark:text-neutral-100">{author.name}</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{author.bio}</p>
      </div>
    </div>
  );
}
