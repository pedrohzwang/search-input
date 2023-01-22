import { Box } from "@mui/material";
import { Col, Row, Select } from "antd";
import Search from "antd/es/input/Search";
import { useState } from "react";
import { searchBooks } from "services/bookService";

const getSearch = (search: string) => {
    const data = searchBooks(search);
    console.log(data);
}

const AntdSearchInput = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <Col style={{ marginBottom: '10px' }} span={24}>
                <Search
                    onSearch={(search) => getSearch(search)}
                    onFocus={() => {
                        setOpen(true);
                        console.log('focus');

                    }}
                    onBlur={() => setOpen(false)}
                />
            </Col>
            <Col span={24}>
                {open &&
                    <Select mode="multiple" allowClear placeholder="Please select" style={{ width: '100%' }}>

                    </Select>}
            </Col>
        </>
    );
}

export default AntdSearchInput;