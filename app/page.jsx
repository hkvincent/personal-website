import React from 'react';
import directus, { getPersonalData } from "@/utils/directus";

import { marked } from 'marked';
import '../styles/global.css'
const page = async () => {
    const personal = await getPersonalData();
    var htmlData = marked(personal[0].body, { headerIds: false, mangle: false });

    return (
        <article className="prose" dangerouslySetInnerHTML={{ __html: htmlData }} />
    );
};

export default page;