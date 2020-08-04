using AutoMapper;
using backend.DAL.Entities;
using backend.Model.Users;

namespace backend.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<UserProfile, UserModel>();
            CreateMap<RegisterModel, UserProfile>();
            CreateMap<UpdateModel, UserProfile>();
        }
    }
}