﻿using Microsoft.AspNetCore.Mvc;
using AssetManagementSystem.Models;
using AssetManagementSystem.Interfaces;
using AutoMapper;
using AssetManagementSystem.Dto;
using Microsoft.AspNetCore.Authorization;
using Asp.Versioning;
using Microsoft.AspNetCore.Cors;

namespace AssetManagementSystem.Controllers.v1
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiversion}/Categories")]
    [ApiController]
    [EnableCors]
    public class AssetCategoriesController : ControllerBase
    {
        private readonly IAssetCategoryRepository _assetCategoryRepository;
        private readonly IMapper _mapper;
        private readonly ILogger<AssetCategoriesController> _logger;

        public AssetCategoriesController(IAssetCategoryRepository assetCategoryRepository, IMapper mapper, ILogger<AssetCategoriesController> logger)
        {
            _assetCategoryRepository = assetCategoryRepository;
            _mapper = mapper;
            _logger = logger;
        }

        [MapToApiVersion("1.0")]
        [Authorize(Roles = "Admin, Employee")]
        [HttpGet]
        public IActionResult GetAllAssetCategories()
        {
            try
            {
                var categories = _mapper.Map<ICollection<AssetCategoryDto>>(_assetCategoryRepository.GetAllCategories());

                return Ok(categories);
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"Exception error: {ex.Message}");
                return StatusCode(500, "An error occured at the server!");
            }
        }

        [MapToApiVersion("1.0")]
        [Authorize(Roles = "Admin, Employee")]
        [HttpGet("{categoryID}")]
        public IActionResult GetAssetCategorByID(int categoryID)
        {
            try
            {
                if (!_assetCategoryRepository.AssetCategoryExists(categoryID)) return NotFound();

                var category = _mapper.Map<AssetCategoryDto>(_assetCategoryRepository.GetCategoryByID(categoryID));

                return Ok(category);
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"Exception error: {ex.Message}");
                return StatusCode(500, "An error occured at the server!");
            }
        }

        [MapToApiVersion("1.0")]
        [Authorize(Roles = "Admin")]
        [HttpPut("{categoryID}")]
        public IActionResult UpdateAssetCategory(int categoryID, AssetCategoryDto assetCategory)
        {
            try
            {
                if (!ModelState.IsValid) return BadRequest(ModelState);

                if (categoryID != assetCategory.CategoryID) return BadRequest();

                var categoryToUpdate = _mapper.Map<AssetCategory>(assetCategory);

                var result = _assetCategoryRepository.UpdateCategory(categoryToUpdate);

                if (result) return NoContent();

                ModelState.AddModelError("Error", "An error occured while updating the category!");
                return StatusCode(500, ModelState);
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"Exception error: {ex.Message}");
                return StatusCode(500, "An error occured at the server!");
            }
        }

        [MapToApiVersion("1.0")]
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult CreateAssetCategory(AssetCategoryDto assetCategory)
        {
            try
            {
                if (!ModelState.IsValid) return BadRequest(assetCategory);

                var categoryToCreate = _mapper.Map<AssetCategory>(assetCategory);

                var result = _assetCategoryRepository.CreateCategory(categoryToCreate);

                if (result) return Ok(categoryToCreate);

                ModelState.AddModelError("Error", "An error occured while updating the category!");
                return StatusCode(500, ModelState);
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"Exception error: {ex.Message}");
                return StatusCode(500, "An error occured at the server!");
            }
        }

        [MapToApiVersion("1.0")]
        [Authorize(Roles = "Admin")]
        [HttpDelete("{categoryID}")]
        public IActionResult DeleteAssetCategory(int categoryID)
        {
            try
            {
                if (!_assetCategoryRepository.AssetCategoryExists(categoryID)) return NotFound();

                var categoryToDelete = _assetCategoryRepository.GetCategoryByID(categoryID);

                var result = _assetCategoryRepository.DeleteCategory(categoryToDelete);

                if (result) return NoContent();

                ModelState.AddModelError("Error", "An error occured while deleting the category!");
                return StatusCode(500, ModelState);
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"Exception error: {ex.Message}");
                return StatusCode(500, "An error occured at the server!");
            }
        }
    }
}