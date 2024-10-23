// babel-plugin-import
// Modern.js Automatically import CSS required by Ant Design component on demand.

import { Helmet } from '@modern-js/runtime/head';
import { useModel } from '@modern-js/runtime/model';
import { useLoaderData } from '@modern-js/runtime/router';
import { List } from 'antd';
import Item from '../components/Item';
import contacts from '../models/contacts';
import type { LoaderData } from './page.data';

function Index() {
  const { data } = useLoaderData() as LoaderData;
  // useModel is the hooks API provided by the Modern.js. You can provide the state
  // defined in the Model in the component, or call the side effects and actions
  // defined in the Model through actions to change the state of the Model.

  // Model is business logic, a computational process that does not create or
  // hold state itself. Only after being used by the component with the hooks API,
  // the state is created in the specified place.
  const [{ items }, { archive, setItems }] = useModel(contacts);
  if (items.length === 0) {
    setItems(data);
  }

  return (
    <div className="container lg mx-auto">
      <Helmet>
        <title>All</title>
      </Helmet>
      <List
        dataSource={items}
        renderItem={info => (
          <Item
            key={info.name}
            info={info}
            onArchive={() => {
              archive(info.email);
            }}
          />
        )}
      />
    </div>
  );
}

export default Index;
