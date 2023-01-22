import { Col } from "antd";
import { Row } from "antd/es/grid";
import AntdSearchInput from "components/antd/AntdSearchInput";

function App() {
  return (
    <Row style={{ marginTop: '40px' }}>
      <Col span={8} offset={8}>
        <AntdSearchInput />
      </Col>
    </Row>
  );
}

export default App;
