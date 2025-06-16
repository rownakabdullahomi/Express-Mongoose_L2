export interface INotes{
    title: string,
    content: string,
    category: "personal" | "work" | "family" | "study" | "other"
    pinned: boolean,
    tags: {
        label: string,
        color: string
    }

}