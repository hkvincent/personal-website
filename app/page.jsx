import React from 'react';
import directus from "../utils/directus";
import { marked } from 'marked';
import '../styles/global.css'
const page = async () => {
    const getPersonalData = async () => {
        const personal = await directus.items("personal").readByQuery({
            fields: [
                "*", // Select all fields
            ],
        });
        return personal.data;
    };
    const personal = await getPersonalData();
    var htmlData = marked(personal[0].body, { headerIds: false, mangle: false });

    return (
        <article className="prose" dangerouslySetInnerHTML={{ __html: htmlData }} />
    );
};

export default page;