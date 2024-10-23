import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import '../styles/utils.css';

import { Outlet, useLocation, useNavigate } from '@modern-js/runtime/router';
import { Radio, type RadioChangeEvent } from 'antd';
import { useState } from 'react';

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentList, setList] = useState(location.pathname || '/');
  const handleSetList = (e: RadioChangeEvent) => {
    const { value } = e.target;
    setList(value);
    navigate(value);
  };

  return (
    <div>
      <div className="h-16 p-2 flex items-center justify-center">
        <Radio.Group onChange={handleSetList} value={currentList}>
          <Radio value="/">All</Radio>
          <Radio value="/archives">Archives</Radio>
        </Radio.Group>
      </div>
      <Outlet />
    </div>
  );
}
