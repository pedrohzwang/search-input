import { Col } from "antd";
import { Row } from "antd/es/grid";
import { GrommetSearch } from "components/grommet/GrommetSearch";

function App() {
  const defaultOptions = [
    'Apple',
    'Orange',
    'Banana',
    'Grape',
    'Melon',
    'Strawberry',
    'Kiwi',
    'Mango',
    'Raspberry',
    'Rhubarb',
  ];

  return (
    <Row style={{ marginTop: '40px' }}>
      <Col span={8} offset={8}>
        <GrommetSearch options={defaultOptions} />
      </Col>
    </Row>
  );
}

export default App;
