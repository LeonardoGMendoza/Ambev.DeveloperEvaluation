using MediatR;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using FluentValidation.Results;
using FluentValidation;
using Ambev.DeveloperEvaluation.WebApi.Features.Auth.AuthenticateUserFeature;
using Ambev.DeveloperEvaluation.Application.Auth.AuthenticateUser;

namespace Ambev.DeveloperEvaluation.WebApi.Features.Auth;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IMediator _mediator;
    private readonly IMapper _mapper;
    private readonly IValidator<AuthenticateUserRequest> _validator;
    private readonly ILogger<AuthController> _logger;

    public AuthController(
        IMediator mediator,
        IMapper mapper,
        IValidator<AuthenticateUserRequest> validator,
        ILogger<AuthController> logger)
    {
        _mediator = mediator;
        _mapper = mapper;
        _validator = validator;
        _logger = logger;
    }

    [HttpPost("login")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<IActionResult> Login([FromBody] AuthenticateUserRequest request, CancellationToken cancellationToken)
    {
        try
        {
            _logger.LogInformation("Login attempt for email: {Email}", request.Email);

            // Validação
            var validationResult = await _validator.ValidateAsync(request, cancellationToken);
            if (!validationResult.IsValid)
            {
                _logger.LogWarning("Validation failed for email: {Email}", request.Email);
                return BadRequest(new
                {
                    Success = false,
                    Message = "Validation failed",
                    Errors = validationResult.Errors.Select(e => new
                    {
                        e.PropertyName,
                        e.ErrorMessage
                    })
                });
            }

            // Mapeamento e execução do comando
            var command = _mapper.Map<AuthenticateUserCommand>(request);
            var response = await _mediator.Send(command, cancellationToken);

            _logger.LogInformation("Login successful for email: {Email}", request.Email);

            return Ok(new
            {
                Success = true,
                Message = "Authentication successful",
                Data = response
            });
        }
        catch (UnauthorizedAccessException ex)
        {
            _logger.LogWarning("Unauthorized access attempt for email: {Email}", request.Email);
            return Unauthorized(new
            {
                Success = false,
                Message = "Invalid credentials",
                Error = ex.Message
            });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error during authentication for email: {Email}", request.Email);
            return StatusCode(500, new
            {
                Success = false,
                Message = "An internal error occurred",
                Error = ex.Message
            });
        }
    }

    [HttpGet("test")]
    public IActionResult Test()
    {
        return Ok(new
        {
            Success = true,
            Message = "AuthController is working",
            Timestamp = DateTime.UtcNow
        });
    }
}