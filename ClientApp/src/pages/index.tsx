import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Spin } from 'antd';
import { useParams } from 'umi';
import request from 'umi-request';
import SpecialCode from './SpecialCode';
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import "./index.css"

export default function HomePage(props: any) {
  const [data, setdata] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const other = useParams()["*"];
  const id = useParams()["id"];

  useEffect(() => {
    setLoading(true);
    request(`/doc/${id}/${other}.md`, { responseType: "text" }).then(data => {
      setdata(data);
    }).finally(() => {
      setLoading(false);
    });
  }, [id, other]);
  return loading ? <Spin size="large" /> : <ReactMarkdown className='markdown-content' remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]} components={{
    code: SpecialCode,
  }}>
    {data}
  </ReactMarkdown>;
}
