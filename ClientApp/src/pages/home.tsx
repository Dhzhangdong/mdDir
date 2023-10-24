import request from 'umi-request';
import { useEffect, useState } from 'react';
import { Space, Card, Layout } from 'antd';

const { Meta } = Card;
const { Header, Content, Footer, Sider } = Layout;

export default function HomePage(props: any) {
    const [docs, setdocs] = useState<{ name: string, logo: string, desc: string }[]>([]);
    useEffect(() => {
        request.get("/api/publicApi/getDoc").then(data => {
            setdocs(data);
        });
    }, []);
    return (
        <div style={{
            height: "98vh",
            width: "100%",
            textAlign: "center",
            marginLeft: 15,
            marginRight: 15
        }}>
            <Space direction="vertical" >
                <h1>文档中心</h1>
                <Space wrap>
                    {docs.map(x => {
                        return <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={"/doc/" + x.logo} />}
                        >
                            <Meta title={<a href={"/doc/" + x.path + "/" + x.home}>{x.name}</a>} style={{ height: 150 }} description={x.desc} />
                        </Card>
                    })}
                </Space>
            </Space>
        </div>

    );
}
