import { useState } from 'react';
import { Box, SelectMultiple } from "grommet";

interface GrommetSearchProps {
    options: string[]
}

export function GrommetSearch(props: GrommetSearchProps) {
    const initialState = props.options;
    const [options, setOptions] = useState<string[]>(props.options);

    const handleSearch = (search: string) => {
        if (search.length === 0) {
            setOptions(initialState);
            return;
        }
        const escapedText = search.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
        const exp = new RegExp(escapedText, 'i');
        setOptions(options.filter((o) => exp.test(o)));
    }

    return (
        <Box>
            <SelectMultiple
                options={options}
                showSelectedInline
                onSearch={(search: string) => handleSearch(search)}
                onClose={() => setOptions(initialState)}
            />
        </Box>
    );
}