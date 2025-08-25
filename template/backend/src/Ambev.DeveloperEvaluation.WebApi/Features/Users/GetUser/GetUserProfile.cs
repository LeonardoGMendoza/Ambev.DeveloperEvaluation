//using AutoMapper;

//namespace Ambev.DeveloperEvaluation.WebApi.Features.Users.GetUser;

///// <summary>
///// Profile for mapping GetUser feature requests to commands
///// </summary>
//public class GetUserProfile : Profile
//{
//    /// <summary>
//    /// Initializes the mappings for GetUser feature
//    /// </summary>
//    public GetUserProfile()
//    {
//        CreateMap<Guid, Application.Users.GetUser.GetUserCommand>()
//            .ConstructUsing(id => new Application.Users.GetUser.GetUserCommand(id));
//    }
//}
using AutoMapper;
using Ambev.DeveloperEvaluation.Application.Users.GetUser;
using Ambev.DeveloperEvaluation.WebApi.Features.Users.GetUser;

namespace Ambev.DeveloperEvaluation.WebApi.Features.Users.GetUser;

/// <summary>
/// Profile for mapping GetUser feature requests to commands
/// </summary>
public class GetUserProfile : Profile
{
    /// <summary>
    /// Initializes the mappings for GetUser feature
    /// </summary>
    public GetUserProfile()
    {
        // Mapeamento existente
        CreateMap<Guid, Application.Users.GetUser.GetUserCommand>()
            .ConstructUsing(id => new Application.Users.GetUser.GetUserCommand(id));

        // ✅ ADICIONE ESTE NOVO MAPEAMENTO:
        CreateMap<GetUserResult, GetUserResponse>();
    }
}