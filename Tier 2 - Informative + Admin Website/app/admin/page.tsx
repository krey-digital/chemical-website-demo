"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import AdminDashboardSkeleton from "@/components/admin/AdminDashboardSkeleton";
import {
  Package,
  TrendingUp,
  Clock,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

export const dynamic = "force-dynamic";

export default function AdminDashboard() {
  const products = useQuery(api.products.listAll);
  const inquiries = useQuery(api.inquiries.list, {});

  if (products === undefined || inquiries === undefined) {
    return <AdminDashboardSkeleton />;
  }

  const publishedCount = products?.filter((p) => p.isPublished).length || 0;
  const totalProducts = products?.length || 0;
  const newInquiries =
    inquiries?.filter((i) => i.status === "new").length || 0;
  const recentInquiries = inquiries?.slice(0, 5) || [];

  const StatCard = ({
    label,
    value,
    Icon,
    trend,
    action,
    iconBg,
  }: {
    label: string;
    value: number;
    Icon: React.ReactNode;
    trend?: number;
    action?: { href: string; text: string };
    iconBg: string;
  }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-slate-100">
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-6">
          <div className={`${iconBg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
            {Icon}
          </div>
          {trend !== undefined && (
            <div className="flex items-center gap-1 text-green-600 text-sm font-semibold bg-green-50 px-2.5 py-1 rounded-full">
              <ArrowUpRight size={14} />
              {trend}%
            </div>
          )}
        </div>
        <div>
          <p className="text-sm font-medium text-slate-600 mb-2">{label}</p>
          <p className="text-3xl md:text-4xl font-bold text-slate-900 group-hover:scale-105 transition-transform origin-left">
            {value}
          </p>
        </div>
        {action && (
          <Link
            href={action.href}
            className="mt-4 inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 font-semibold text-sm transition-all group/link"
          >
            {action.text}
            <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Dashboard</h1>
        <p className="text-slate-600">Welcome back! Here's your business overview.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          label="Total Products"
          value={totalProducts}
          Icon={<Package className="w-6 h-6 text-blue-600" />}
          iconBg="bg-blue-100"
          trend={12}
          action={{ href: "/admin/products", text: "View All" }}
        />
        <StatCard
          label="Published"
          value={publishedCount}
          Icon={<TrendingUp className="w-6 h-6 text-emerald-600" />}
          iconBg="bg-emerald-100"
          trend={8}
        />
        <StatCard
          label="New Inquiries"
          value={newInquiries}
          Icon={<Clock className="w-6 h-6 text-orange-600" />}
          iconBg="bg-orange-100"
          action={{ href: "/admin/inquiries?status=new", text: "Review" }}
        />
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick actions */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg p-6 md:p-8 border border-slate-200 h-full">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <Link
                href="/admin/products/new"
                className="flex items-center justify-between w-full px-4 py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group"
              >
                <span>Create Product</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/admin/inquiries"
                className="flex items-center justify-between w-full px-4 py-3.5 bg-white hover:bg-slate-50 border-2 border-amber-600 text-amber-600 hover:border-amber-700 rounded-xl font-semibold transition-all duration-200"
              >
                <span>View Inquiries</span>
                <ChevronRight size={18} />
              </Link>
              <Link
                href="/admin/products"
                className="flex items-center justify-between w-full px-4 py-3.5 bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 hover:border-slate-400 rounded-xl font-semibold transition-all duration-200"
              >
                <span>All Products</span>
                <ChevronRight size={18} />
              </Link>
            </div>

            {/* Stats overview */}
            <div className="mt-8 pt-8 border-t border-slate-300 space-y-4">
              <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Draft Products</span>
                  <span className="font-semibold text-slate-900">
                    {totalProducts - publishedCount}
                  </span>
                </div>
                <div className="w-full bg-slate-300 rounded-full h-2">
                  <div
                    className="bg-amber-500 h-2 rounded-full"
                    style={{
                      width: `${
                        totalProducts > 0
                          ? ((totalProducts - publishedCount) / totalProducts) * 100
                          : 0
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent inquiries */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex flex-col h-full">
            {/* Header */}
            <div className="px-6 md:px-8 py-6 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900">Recent Inquiries</h2>
                <Link
                  href="/admin/inquiries"
                  className="text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors flex items-center gap-1"
                >
                  View All
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-x-auto">
              {recentInquiries.length > 0 ? (
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200 sticky top-0">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {recentInquiries.map((inquiry) => (
                      <tr
                        key={inquiry._id}
                        className="hover:bg-slate-50/50 transition-colors duration-150"
                      >
                        <td className="px-6 py-4">
                          <div className="text-sm font-semibold text-slate-900">
                            {inquiry.name}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {inquiry.company}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                            {inquiry.type}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${
                              inquiry.status === "new"
                                ? "bg-red-100 text-red-700"
                                : inquiry.status === "contacted"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : inquiry.status === "quoted"
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-green-100 text-green-700"
                            }`}
                          >
                            {inquiry.status.charAt(0).toUpperCase() +
                              inquiry.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Link
                            href="/admin/inquiries"
                            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors"
                          >
                            <ChevronRight size={16} />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="flex items-center justify-center h-48">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📭</div>
                    <p className="text-slate-600 font-medium">No inquiries yet</p>
                    <p className="text-xs text-slate-500 mt-1">
                      New inquiries will appear here
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
