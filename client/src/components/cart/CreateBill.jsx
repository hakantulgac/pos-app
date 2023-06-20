import { Button, Card, Form, Input, Modal, Select } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <Modal
        title="Fatura Olustur"
        open={isModalOpen}
        footer={false}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="customerName"
            label="Müşteri Adı"
            rules={[{ required: true, message: "Bu alan boş bırakılamaz" }]}
          >
            <Input placeholder="Bir Müşteri Adı Yazınız" />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label="Tel No"
            rules={[{ required: true, message: "Bu alan boş bırakılamaz" }]}
          >
            <Input placeholder="Bir Telefon Numarası Yazınız" maxLength={11}/>
          </Form.Item>
          <Form.Item
            name="paymentMode"
            label="Ödeme Yöntemi"
            rules={[{ required: true, message: "Bu alan boş bırakılamaz" }]}
          >
            <Select placeholder="Bir Ödeme Yöntemi Seçiniz">
              <Select.Option value="nakit">Nakit</Select.Option>
              <Select.Option value="kredi">Kredi Kartı</Select.Option>
            </Select>
          </Form.Item>
          <Card>
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>549.00₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV Toplam %8</span>
              <span className="text-red-600">+43.92₺</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Toplam</span>
              <span className="font-bold">592.00₺</span>
            </div>
            <div className="flex justify-end">
              <Button
                className="mt-4"
                type="primary"
                onClick={() => setIsModalOpen(true)}
                htmlType="sumbit"
              >
                Sipariş Oluştur
              </Button>
            </div>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default CreateBill;
