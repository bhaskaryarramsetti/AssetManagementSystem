﻿// <auto-generated />
using System;
using AssetManagementSystem.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace AssetManagementSystem.Migrations
{
    [DbContext(typeof(AssetManagementSystemContext))]
    [Migration("20240526095328_mig")]
    partial class mig
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.26")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("AssetManagementSystem.Models.Admin", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ContactNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsVerified")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<byte[]>("PasswordSalt")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Admins");
                });

            modelBuilder.Entity("AssetManagementSystem.Models.Asset", b =>
                {
                    b.Property<int>("AssetID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("AssetID"), 1L, 1);

                    b.Property<int>("AssetCategoryID")
                        .HasColumnType("int");

                    b.Property<string>("AssetDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AssetImageFilename")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AssetImageURL")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AssetModel")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AssetName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AssetSpecifications")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AssetStatus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal?>("AssetValue")
                        .HasColumnType("decimal(18,2)");

                    b.Property<DateTime?>("ExpiryDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("ManufacturingDate")
                        .HasColumnType("datetime2");

                    b.HasKey("AssetID");

                    b.HasIndex("AssetCategoryID");

                    b.ToTable("AssetCatalogue");
                });

            modelBuilder.Entity("AssetManagementSystem.Models.AssetAllocationDetail", b =>
                {
                    b.Property<int>("AssetAllocationID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("AssetAllocationID"), 1L, 1);

                    b.Property<string>("AllocationDetails")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AllocationStatus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("AssetAllocatedFrom")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("AssetAllocatedTill")
                        .IsRequired()
                        .HasColumnType("datetime2");

                    b.Property<int>("AssetCount")
                        .HasColumnType("int");

                    b.Property<int>("AssetID")
                        .HasColumnType("int");

                    b.Property<int>("EmployeeID")
                        .HasColumnType("int");

                    b.HasKey("AssetAllocationID");

                    b.HasIndex("AssetID");

                    b.HasIndex("EmployeeID");

                    b.ToTable("AssetAllocationDetails");
                });

            modelBuilder.Entity("AssetManagementSystem.Models.AssetAuditReportRequest", b =>
                {
                    b.Property<int>("RequestID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RequestID"), 1L, 1);

                    b.Property<int>("AssetID")
                        .HasColumnType("int");

                    b.Property<int>("EmployeeID")
                        .HasColumnType("int");

                    b.Property<string>("RequestDetails")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RequestStatus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("RequestID");

                    b.HasIndex("AssetID");

                    b.HasIndex("EmployeeID");

                    b.ToTable("AssetAuditReportRequests");
                });

            modelBuilder.Entity("AssetManagementSystem.Models.AssetBorrowAndReturnRequest", b =>
                {
                    b.Property<int>("RequestID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RequestID"), 1L, 1);

                    b.Property<int>("AdminID")
                        .HasColumnType("int");

                    b.Property<DateTime?>("AssetAllocationFrom")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("AssetAllocationTill")
                        .HasColumnType("datetime2");

                    b.Property<int>("AssetCount")
                        .HasColumnType("int");

                    b.Property<int>("AssetID")
                        .HasColumnType("int");

                    b.Property<string>("AssetRequestType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("EmployeeID")
                        .HasColumnType("int");

                    b.Property<string>("RequestDetails")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RequestStatus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("RequestID");

                    b.HasIndex("AdminID");

                    b.HasIndex("AssetID");

                    b.HasIndex("EmployeeID");

                    b.ToTable("AssetBorrowAndReturnRequests");
                });

            modelBuilder.Entity("AssetManagementSystem.Models.AssetCategory", b =>
                {
                    b.Property<int>("CategoryID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CategoryID"), 1L, 1);

                    b.Property<string>("CategoryDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CategoryName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CategoryID");

                    b.ToTable("AssetCategories");
                });

            modelBuilder.Entity("AssetManagementSystem.Models.AssetServiceRequest", b =>
                {
                    b.Property<int>("RequestID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RequestID"), 1L, 1);

                    b.Property<int>("AssetID")
                        .HasColumnType("int");

                    b.Property<int>("EmployeeID")
                        .HasColumnType("int");

                    b.Property<string>("IssueType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RequestDetails")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RequestStatus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("RequestID");

                    b.HasIndex("AssetID");

                    b.HasIndex("EmployeeID");

                    b.ToTable("AssetServiceRequests");
                });

            modelBuilder.Entity("AssetManagementSystem.Models.Employee", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ContactNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<byte[]>("PasswordSalt")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("AssetManagementSystem.Models.Asset", b =>
                {
                    b.HasOne("AssetManagementSystem.Models.AssetCategory", "AssetCategory")
                        .WithMany()
                        .HasForeignKey("AssetCategoryID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("AssetCategory");
                });

            modelBuilder.Entity("AssetManagementSystem.Models.AssetAllocationDetail", b =>
                {
                    b.HasOne("AssetManagementSystem.Models.Asset", "Asset")
                        .WithMany()
                        .HasForeignKey("AssetID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("AssetManagementSystem.Models.Employee", "Employee")
                        .WithMany("AssetAllocationDetails")
                        .HasForeignKey("EmployeeID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Asset");

                    b.Navigation("Employee");
                });

            modelBuilder.Entity("AssetManagementSystem.Models.AssetAuditReportRequest", b =>
                {
                    b.HasOne("AssetManagementSystem.Models.Asset", "Asset")
                        .WithMany()
                        .HasForeignKey("AssetID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("AssetManagementSystem.Models.Employee", "Employee")
                        .WithMany()
                        .HasForeignKey("EmployeeID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Asset");

                    b.Navigation("Employee");
                });

            modelBuilder.Entity("AssetManagementSystem.Models.AssetBorrowAndReturnRequest", b =>
                {
                    b.HasOne("AssetManagementSystem.Models.Admin", "Admin")
                        .WithMany()
                        .HasForeignKey("AdminID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("AssetManagementSystem.Models.Asset", "Asset")
                        .WithMany()
                        .HasForeignKey("AssetID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("AssetManagementSystem.Models.Employee", "Employee")
                        .WithMany()
                        .HasForeignKey("EmployeeID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Admin");

                    b.Navigation("Asset");

                    b.Navigation("Employee");
                });

            modelBuilder.Entity("AssetManagementSystem.Models.AssetServiceRequest", b =>
                {
                    b.HasOne("AssetManagementSystem.Models.Asset", "Asset")
                        .WithMany()
                        .HasForeignKey("AssetID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("AssetManagementSystem.Models.Employee", "Employee")
                        .WithMany()
                        .HasForeignKey("EmployeeID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Asset");

                    b.Navigation("Employee");
                });

            modelBuilder.Entity("AssetManagementSystem.Models.Employee", b =>
                {
                    b.Navigation("AssetAllocationDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
