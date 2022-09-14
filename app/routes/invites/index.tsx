import { json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { ActionFunction } from "react-router";

export const action: ActionFunction = async ({ request }) => {
    const body = Object.fromEntries(await request.formData());

    return json({
        value: body.code,
    });
};

export default () => {
    const actionData: any = useActionData();

    return (
        <>
            {actionData?.value && <div>You entered: {actionData.value}</div>}
            <Form method="post">
                <input name="code" placeholder="code" />
                <button type="submit">Submit</button>
            </Form>
        </>
    );
};
