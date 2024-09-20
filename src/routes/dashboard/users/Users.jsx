import { Button, Table } from 'antd';
import { useDeleteUsersMutation, useGetUsersQuery } from '../../../redux/api/profile';

const Users = () => {
  const { data } = useGetUsersQuery();
  const [deleteUser] = useDeleteUsersMutation();

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
    },
    {
      title: 'Firstname',
      dataIndex: 'first_name',
    },
    {
      title: 'Image',
      dataIndex: 'photo_url',
      render: (url) => (
        <img
          width={50}
          src={url ? url : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"}
          alt="User"
        />
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (user) => (
        <div className="flex gap-4">
          <Button onClick={() => {
            {
              promoteUser(user.username)
            }
          }} type="primary">Promote</Button>
          <Button
            onClick={() => {
              deleteUser({ id: user._id });
            }}
            danger
            type="primary"
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex-1">
      <Table
        className="w-full"
        columns={columns}
        dataSource={data?.payload}
        rowKey="_id"
        size="middle"
        pagination={{
          pageSize: 5,
          pageSizeOptions: [5, 10, 15, 20],
          defaultPageSize: 5,
        }}
      />
    </div>
  );
};

export default Users;