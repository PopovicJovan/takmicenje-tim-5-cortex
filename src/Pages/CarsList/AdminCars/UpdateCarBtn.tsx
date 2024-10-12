import React, { useState } from "react";
import { Button, message } from "antd";
import CarUpdateModal from "./CarUpdateModal";

interface UpdateCarBtnProps {
  carId: number;
}

const UpdateCarBtn: React.FC<UpdateCarBtnProps> = ({ carId }) => {
  const [updateModalVisible, setUpdateModalVisible] = useState(false);

  // Handle opening and closing the update modal
  const handleUpdateModalOpen = () => {
    setUpdateModalVisible(true);
  };
  const handleUpdateModalClose = () => {
    setUpdateModalVisible(false);
  };

  // Callback for successful update
  const handleUpdateSuccess = () => {
    message.success("car updated successfully");
    setUpdateModalVisible(false);
  };

  return (
    <div>
      {/* Button to open update car modal */}
      <Button type="default" onClick={handleUpdateModalOpen}>
        Update Car
      </Button>

      {/* Car update modal */}
      <CarUpdateModal
        carId={carId}
        visible={updateModalVisible}
        onCancel={handleUpdateModalClose}
        onUpdateSuccess={handleUpdateSuccess}
      />
    </div>
  );
};

export default UpdateCarBtn;
