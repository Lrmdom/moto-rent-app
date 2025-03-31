// src/sanity/client.ts

import { createClient } from "@sanity/client";

declare global {
    interface Window {
        ENV: {
            VITE_SANITY_STUDIO_PROJECT_ID: string;
            VITE_SANITY_STUDIO_DATASET: string;
            VITE_SANITY_STUDIO_URL: string;
        };
    }
}

const env = typeof document === "undefined" ? process.env : window.ENV;

export const client = createClient({
    projectId: env.VITE_SANITY_STUDIO_PROJECT_ID,
    dataset: env.VITE_SANITY_STUDIO_DATASET,
    apiVersion: "2024-12-01",
    useCdn: true,
    stega: {
        enabled:true,
        studioUrl: env.VITE_SANITY_STUDIO_URL,
    },
});