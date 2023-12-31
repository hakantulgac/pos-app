import { Button, Carousel, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import AuthCarousel from "../../components/auth/AuthCarousel";

const Login = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className=" xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
          <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical">
            <Form.Item
              label="E-mail"
              name={"email"}
              rules={[
                {
                  required: true,
                  message: "Bu alan boş bırakılamaz",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Şifre"
              name={"password"}
              rules={[
                {
                  required: true,
                  message: "Bu alan boş bırakılamaz",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item name={"remember"} valuePropName="checked">
                <div className="flex justify-between items-center">
                    <Checkbox>Beni Hatırla</Checkbox>
                    <Link>Parolayı mı unuttun?</Link>
                </div>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
              >
                Giriş Yap
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-end absolute left-0 bottom-10 ml-20">
            Henüz bir hesabınız yok mu? &nbsp;{" "}
            <Link className="text-blue-600" to="/Register">
              Şimdi kaydol
            </Link>
          </div>
        </div>
        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full">
          <div className="w-full h-full">
            <Carousel className="h-full px-3" autoplay>
              <AuthCarousel
                img="/images/responsive.svg"
                title="Responsive"
                description="Tüm Cihaz Boyutlarıyla Uyumluluk"
              />
              <AuthCarousel
                img="/images/statistic.svg"
                title="İstatistikler"
                description="Geniş Tutulan İstatistikler"
              />
              <AuthCarousel
                img="/images/customer.svg"
                title="Müşteri Memnuniyeti"
                description="Deneyim Sonunda Üründen Memnun Müşteriler"
              />
              <AuthCarousel
                img="/images/admin.svg"
                title="Yönetici Paneli"
                description="Tek Yerden Yönetim"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
