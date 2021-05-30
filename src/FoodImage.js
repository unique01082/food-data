import { usePersistFn, useToggle } from "ahooks";
import { Button, Col, Drawer, Empty, Image, Row, Skeleton } from "antd";
import React, { useState } from "react";

import { keywordToImages } from "./services";

const ImagesDrawer = ({ images, ...restProps }) => {
  return (
    <Drawer placement="left" closable {...restProps}>
      {!images && <Skeleton active />}
      {images && !images.length && <Empty />}
      {images && images.length && (
        <Row>
          {images.map((i) => (
            <Col span={6}>
              <Image src={i} />
            </Col>
          ))}
        </Row>
      )}
    </Drawer>
  );
};

const FoodImage = ({ food: { fdcId, description } }) => {
  const [state, { toggle }] = useToggle();
  const [images, setImages] = useState([]);
  const fetchImages = usePersistFn(() => {
    const q = description
      .split(",")
      .map((text) => text.trim().toLowerCase().replace(/\W/g, " "))
      .join(" ");
    keywordToImages(q).then(setImages);
  });

  return (
    <>
      <Button onClick={() => toggle()}>Images</Button>
      <ImagesDrawer
        key={fdcId}
        images={images}
        visible={state}
        width="80%"
        onClose={() => toggle()}
        afterVisibleChange={(visible) => {
          if (visible) {
            fetchImages();
          }
        }}
      />
    </>
  );
};

export default FoodImage;
