import { html } from "@stricjs/arrow/utils";

// Render on the client
export function render() {
    // Render a <p> tag with text "Hi"
    html`<p>Hi</p>`;
    
    // Code inside this can use Web APIs
}

// Export a path to handle
export const path = "/";
