import type { RequestEvent } from "@sveltejs/kit";
import { deleteFormTemplate } from "../../services/form-template";

/////////////////////////////////////////////////////////////////////////////

export const DELETE = async (event: RequestEvent) => {
    const request = event.request;
    const data = await request.json();

    try {
        const response = await deleteFormTemplate(
            data.templateId,
        );
        return new Response(response.message);
    } catch (err) {
        console.error(`Error deleting assessment node: ${err}`);
        return new Response(err);
    }
};
