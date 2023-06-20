import {Button, Modal} from "antd";

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {

  return (
    <>
      <Modal
        title="Fatura Yazdır"
        open={isModalOpen}
        footer={false}
        onCancel={() => setIsModalOpen(false)}
        width={800}
      >
        <section className="py-20 bg-black">
            <div className="max-w-5xl mx-auto bg-white px-6">
                <article className="overflow-hidden">
                    <div className="logo my-6">
                        <h2 className="text-4xl font-bold text-slate-700">
                            LOGO
                        </h2>
                    </div>
                    <div className="bill-details">
                        <div className="grid sm:grid-cols-4 grid-cols-3 gap-2">
                            <div className="text-md text-slate-400">
                                <p className="text-slate-950">Fatura Detayı:</p>
                                Unwrapped
                                <p>Fake Street 123</p>
                                <p>San Javier</p>
                                <p>CA 1234</p>
                            </div>
                            <div className="text-md text-slate-400">
                                <p className="text-slate-950">Fatura</p>
                                The Boring Company
                                <p>Tesla Street 007</p>
                                <p>Frisco</p>
                                <p>CA 0000</p>
                            </div>
                            <div className="text-md text-slate-400">
                                <p className="text-slate-950">Fatura numarası</p>
                                00053
                                <div className="text-md text-slate-400 mt-3">
                                    <p className="text-slate-950">Veriliş Tarihi</p>
                                    2023-01-21
                                </div>
                            </div>
                            <div className="text-md text-slate-400 sm:block hidden">
                                <p className="text-slate-950">Şartlar</p>
                                <p>7 gün</p>
                                <div className="text-md text-slate-400 mt-3">
                                    <p className="text-slate-950">Vade</p>
                                    2023-04-05
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bill-table-area mt-8">
                        <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                            <thead>
                                <tr className="border-b border-slate-400">
                                    <th scope="col" className="py-3.5 text-left text-sm
                                    font-normal text-medium md:pl-0 sm:table-cell
                                    hidden">Görsel</th>
                                    <th scope="col" className="py-3.5 text-left text-sm
                                    font-normal text-medium md:pl-0 ">Başlık</th>
                                    <th scope="col" className="py-3.5 text-center text-sm
                                    font-normal text-medium md:pl-0 sm:table-cell
                                    hidden">Fiyat</th>
                                    <th scope="col" className="py-3.5 text-center text-sm
                                    font-normal text-medium md:pl-0 sm:table-cell
                                    hidden">Adet</th>
                                    <th scope="col" className="py-3.5 text-end text-sm
                                    font-normal text-medium md:pl-0">Toplam</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-300">
                                    <td className="py-4 sm:table-cell hidden">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Honeycrisp-Apple.jpg/640px-Honeycrisp-Apple.jpg"
                                         alt=""  className="w-12 h-12 object-cover"/>
                                    </td>
                                    <td className="py-4">
                                        <div className="flex flex-col">
                                            <span>Elma</span>
                                            <span className="sm:hidden text-xs text-slate-600">Birim fiyatı 5₺</span>
                                        </div>
                                    </td>
                                    <td className="py-4 text-center sm:table-cell hidden">
                                        <span>5₺</span>
                                    </td>
                                    <td className="py-4 text-center sm:table-cell hidden">
                                        <span>1</span>
                                    </td>
                                    <td className="py-4 text-end">
                                        <span>5.00₺</span>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th className="text-right pt-6 sm:table-cell hidden" colSpan={4} scope="row">
                                        <span className="font-normal text-slate-600">
                                            Ara Toplam
                                        </span> 
                                    </th>
                                    <th className="text-left pt-6 sm:hidden" scope="row">
                                        <p className="font-normal text-slate-600">
                                            Ara Toplam
                                        </p> 
                                    </th>
                                    <th className="text-right pt-6" scope="row">
                                        <span className="font-normal text-slate-600">
                                            60₺
                                        </span> 
                                    </th>
                                </tr>
                                <tr>
                                    <th className="text-right pt-3 sm:table-cell  hidden" colSpan={4} scope="row">
                                        <span className="font-normal text-slate-600">
                                            KDV %8
                                        </span> 
                                    </th>
                                    <th className="text-left pt-3 sm:hidden" scope="row">
                                        <span className="font-normal text-slate-600">
                                            KDV %8
                                        </span> 
                                    </th>
                                    <th className="text-right pt-3" scope="row">
                                        <span className="font-normal text-red-700">
                                            +4.8₺
                                        </span> 
                                    </th>
                                </tr>
                                <tr>
                                <th className="text-right pt-3 sm:table-cell hidden" colSpan={4} scope="row">
                                        <span className="font-normal">
                                            Genel Toplam
                                        </span> 
                                    </th>
                                    <th className="text-left pt-3 sm:hidden" scope="row">
                                        <span className="font-normal">
                                            Genel Toplam
                                        </span> 
                                    </th>
                                    <th className="text-right pt-3" scope="row">
                                        <span className="font-normal">
                                            64.8₺
                                        </span> 
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="py-9">
                            <div className="border-t pt-9 border-slate-300">
                                <p className="text-sm font-light text-slate-700">
                                    Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç Ödenmesi Yasası 0000'e göre, 
                                    serbest çalışanların bu süreden sonra borçların ödenmemesi durumunda 00.00 gecikme 
                                    ücreti talep etme hakkına sahip olduklarını ve bu noktada bu ücrete ek olarak yeni 
                                    bir fatura sunulacağını lütfen unutmayın. Revize faturanın 14 gün içinde ödenmemesi 
                                    durumunda, vadesi geçmiş hesaba ek faiz ve %8 yasal oran artı %0,5 Bank of England tabanı 
                                    olmak üzere toplam %8,5 uygulanacaktır. Taraflar Kanun hükümleri dışında sözleşme yapamazlar.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
        <div className="flex justify-end mt-4">
            <Button type="primary" size="large">Yazdır</Button>
        </div>
      </Modal>
    </>
  );
};

export default PrintBill;
