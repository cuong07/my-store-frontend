import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment"
import { createAxios } from "../../utils/createIntance"
import icons from '../../utils/icons';
import { deleteUser, getAllUsers } from '../../apis';
import { useNavigate } from 'react-router';
import authslice from '../../store/authSlice';


const { AiOutlineUserDelete } = icons;
const AllUser = () => {
  const users = useSelector(state => state.users.users.allUsers?.data)
  const user = useSelector(state => state.auth.login?.currentUser)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let requestJWT = createAxios(user, dispatch, authslice.actions.loginSuccess);

  const handlerDeleteUser = (id) => {
    deleteUser(user?.token, dispatch, id, requestJWT)
  }

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    getAllUsers(user.token, dispatch, requestJWT);
  }, [dispatch, navigate, user, requestJWT])

  let thStyle = "font-semibold py-2 px-8 text-left text-[#E2B842]"
  let tdStyle = "font-normal px-8"

  return (
    <div className='w-ful h-screen mt-20 flex items-center flex-col'>
      <h2>Quản lý thành viên </h2>
      <table className='table-row border-collapse border-2'>
        <thead className='border-b-2'>
          <tr className='h-5'>
            <th className={thStyle}>ID</th>
            <th className={thStyle}>Name</th>
            <th className={thStyle}>Username</th>
            <th className={thStyle}>Email</th>
            <th className={thStyle}>Admin</th>
            <th className={thStyle}>Ngày tạo</th>
            <th className={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody className=''>
          {users?.map((user, index) =>
            <tr className={`h-9 border-b-2 ${index % 2 !== 0 ? "bg-slate-200" : ""}`} key={user.id}>
              <td className={tdStyle}>{user.id}</td>
              <td className={tdStyle}>{user.name}</td>
              <td className={tdStyle}>{user.username}</td>
              <td className={tdStyle}>{user.email}</td>
              <td className={tdStyle}>{`${user.admin ? "Quản lý" : "Thành viên"}`}</td>
              <td className={tdStyle}>{moment(user.updatedAt).utc().format("DD-MM-YYYY")}</td>
              <td className={tdStyle}>
                <span
                  onClick={() => handlerDeleteUser(user?.id)}
                >
                  <AiOutlineUserDelete
                    title="Delete user" className='cursor-pointer text-center'
                  />
                </span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default AllUser;