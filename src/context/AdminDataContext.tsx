import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  COMPANY_CONTACT,
  FEATURED_PROJECTS,
  BLOG_POSTS,
  CLIENT_REVIEWS,
  ProjectVideo,
  BlogPost,
  Review,
} from '../data/architectData';

export interface CustomerInquiry {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  location: string;
  floors: string;
  message: string;
  date: string;
  status: 'New' | 'Contacted' | 'Site Survey' | 'Design In Progress' | 'Closed';
}

export interface ScheduledBooking {
  id: string;
  name: string;
  phone: string;
  date: string;
  timeSlot: string;
  service: string;
  meetingType: string;
  notes: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
}

export interface CalculatorLead {
  id: string;
  date: string;
  landSize: string;
  floors: number;
  finishQuality: string;
  foundationType: string;
  builtUpSqft: number;
  estimatedCostBDT: string;
  clientNote?: string;
}

export interface CompanyContactState {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  whatsappUrl: string;
  headOffice: string;
  branchOffice: string;
  workingHours: string;
  youtubeChannel: string;
  youtubeSubscribers: string;
}

interface AdminDataContextType {
  // Inquiries
  inquiries: CustomerInquiry[];
  addInquiry: (inquiry: Omit<CustomerInquiry, 'id' | 'date' | 'status'>) => void;
  updateInquiryStatus: (id: string, status: CustomerInquiry['status']) => void;
  deleteInquiry: (id: string) => void;

  // Appointments
  appointments: ScheduledBooking[];
  addAppointment: (booking: Omit<ScheduledBooking, 'id' | 'status'>) => void;
  updateAppointmentStatus: (id: string, status: ScheduledBooking['status']) => void;
  deleteAppointment: (id: string) => void;

  // Calculator leads
  calculatorLeads: CalculatorLead[];
  addCalculatorLead: (lead: Omit<CalculatorLead, 'id' | 'date'>) => void;
  deleteCalculatorLead: (id: string) => void;

  // Projects
  projects: ProjectVideo[];
  addProject: (project: Omit<ProjectVideo, 'id'>) => void;
  updateProject: (id: string, project: Partial<ProjectVideo>) => void;
  deleteProject: (id: string) => void;

  // Blogs
  blogs: BlogPost[];
  addBlog: (blog: Omit<BlogPost, 'id'>) => void;
  updateBlog: (id: string, blog: Partial<BlogPost>) => void;
  deleteBlog: (id: string) => void;

  // Reviews
  reviews: Review[];
  addReview: (review: Omit<Review, 'id'>) => void;
  updateReview: (id: string, review: Partial<Review>) => void;
  deleteReview: (id: string) => void;

  // Company Contact
  companyContact: CompanyContactState;
  updateCompanyContact: (contact: Partial<CompanyContactState>) => void;

  // Reset
  resetToDefaults: () => void;
}

const INITIAL_INQUIRIES: CustomerInquiry[] = [
  {
    id: 'inq-1',
    fullName: 'Mr. Rafiqul Islam',
    phone: '01711223344',
    email: 'rafiqul.islam@gmail.com',
    location: 'Plot 42, Road 11, Sector 4, Uttara, Dhaka',
    floors: '৬ তলা+ / ডুপ্লেক্স',
    message: '৫ কাঠা জমিতে ৬ তলা আবাসিক ভবন নির্মাণ করতে চাই। রাজউক অনুমোদন ও সয়েল টেস্ট ড্রয়িং প্রয়োজন।',
    date: '2026-11-09 14:30',
    status: 'New',
  },
  {
    id: 'inq-2',
    fullName: 'Dr. Sharmin Akter',
    phone: '01819876543',
    email: 'dr.sharmin@hospital.org',
    location: 'Housing Estate, Kushtia',
    floors: '৪ তলা',
    message: 'কুষ্টিয়ায় সাড়ে ৩ কাঠা জমিতে আধুনিক ডুপ্লেক্স কাম রেসিডেন্সিয়াল বাড়ির পূর্ণাঙ্গ নকশা ও খরচের হিসাব চাই।',
    date: '2026-11-08 10:15',
    status: 'Contacted',
  },
  {
    id: 'inq-3',
    fullName: 'Engr. Mahbubur Rahman',
    phone: '01911445566',
    email: 'mahbub.rahman@dhakatech.com',
    location: 'Block C, Bashundhara R/A, Dhaka',
    floors: '৫ তলা',
    message: 'গ্রাউন্ড ফ্লোর পার্কিং সহ প্রতি ফ্লোরে দুটি করে ইউনিট। বিএনবিসি ২০২০ অনুযায়ী ভূমিকম্প সহনশীল ফ্রেম দরকার।',
    date: '2026-11-06 16:45',
    status: 'Site Survey',
  },
];

const INITIAL_APPOINTMENTS: ScheduledBooking[] = [
  {
    id: 'app-1',
    name: 'Al-Haj Nazmul Huda',
    phone: '01715566778',
    date: '2026-11-12',
    timeSlot: '11:30 AM - 01:00 PM',
    service: 'Architectural & Building Design',
    meetingType: 'In-Person at Dhaka Head Office',
    notes: 'মিরপুর ডিওএইচএস-এ ৬ তলা কমার্শিয়াল ভবনের মাস্টার প্ল্যান আলোচনা।',
    status: 'Confirmed',
  },
  {
    id: 'app-2',
    name: 'Mrs. Farhana Yasmin',
    phone: '01812345678',
    date: '2026-11-13',
    timeSlot: '03:00 PM - 04:30 PM',
    service: 'Cost Estimation & BOQ Calculation',
    meetingType: 'WhatsApp Video Conference',
    notes: '৪ তলা ডুপ্লেক্সের টোটাল বাজেট ও রড-সিমেন্টের হিসাব বিশ্লেষণ।',
    status: 'Pending',
  },
];

const INITIAL_CALCULATOR_LEADS: CalculatorLead[] = [
  {
    id: 'calc-1',
    date: '2026-11-10 11:20',
    landSize: '4 Katha',
    floors: 5,
    finishQuality: 'Standard (৳2,250/sqft)',
    foundationType: 'Deep Pile',
    builtUpSqft: 9360,
    estimatedCostBDT: '৳ 2.29 Crore',
    clientNote: 'Calculated budget from website cost estimator.',
  },
];

const AdminDataContext = createContext<AdminDataContextType | undefined>(undefined);

export const AdminDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Inquiries
  const [inquiries, setInquiries] = useState<CustomerInquiry[]>(() => {
    try {
      const saved = localStorage.getItem('ga_admin_inquiries');
      return saved ? JSON.parse(saved) : INITIAL_INQUIRIES;
    } catch {
      return INITIAL_INQUIRIES;
    }
  });

  // 2. Appointments
  const [appointments, setAppointments] = useState<ScheduledBooking[]>(() => {
    try {
      const saved = localStorage.getItem('ga_admin_appointments');
      return saved ? JSON.parse(saved) : INITIAL_APPOINTMENTS;
    } catch {
      return INITIAL_APPOINTMENTS;
    }
  });

  // 3. Calculator leads
  const [calculatorLeads, setCalculatorLeads] = useState<CalculatorLead[]>(() => {
    try {
      const saved = localStorage.getItem('ga_admin_calc_leads');
      return saved ? JSON.parse(saved) : INITIAL_CALCULATOR_LEADS;
    } catch {
      return INITIAL_CALCULATOR_LEADS;
    }
  });

  // 4. Projects
  const [projects, setProjects] = useState<ProjectVideo[]>(() => {
    try {
      const saved = localStorage.getItem('ga_admin_projects');
      return saved ? JSON.parse(saved) : FEATURED_PROJECTS;
    } catch {
      return FEATURED_PROJECTS;
    }
  });

  // 5. Blogs
  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    try {
      const saved = localStorage.getItem('ga_admin_blogs');
      return saved ? JSON.parse(saved) : BLOG_POSTS;
    } catch {
      return BLOG_POSTS;
    }
  });

  // 6. Reviews
  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem('ga_admin_reviews');
      return saved ? JSON.parse(saved) : CLIENT_REVIEWS;
    } catch {
      return CLIENT_REVIEWS;
    }
  });

  // 7. Company Contact Info
  const [companyContact, setCompanyContact] = useState<CompanyContactState>(() => {
    try {
      const saved = localStorage.getItem('ga_admin_contact');
      return saved ? JSON.parse(saved) : COMPANY_CONTACT;
    } catch {
      return COMPANY_CONTACT;
    }
  });

  // Save to localStorage when updated
  useEffect(() => {
    localStorage.setItem('ga_admin_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem('ga_admin_appointments', JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem('ga_admin_calc_leads', JSON.stringify(calculatorLeads));
  }, [calculatorLeads]);

  useEffect(() => {
    localStorage.setItem('ga_admin_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('ga_admin_blogs', JSON.stringify(blogs));
  }, [blogs]);

  useEffect(() => {
    localStorage.setItem('ga_admin_reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem('ga_admin_contact', JSON.stringify(companyContact));
  }, [companyContact]);

  // Methods
  const addInquiry = (inquiry: Omit<CustomerInquiry, 'id' | 'date' | 'status'>) => {
    const newInq: CustomerInquiry = {
      ...inquiry,
      id: 'inq-' + Date.now(),
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'New',
    };
    setInquiries((prev) => [newInq, ...prev]);
  };

  const updateInquiryStatus = (id: string, status: CustomerInquiry['status']) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  const deleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((item) => item.id !== id));
  };

  const addAppointment = (booking: Omit<ScheduledBooking, 'id' | 'status'>) => {
    const newApp: ScheduledBooking = {
      ...booking,
      id: 'app-' + Date.now(),
      status: 'Pending',
    };
    setAppointments((prev) => [newApp, ...prev]);
  };

  const updateAppointmentStatus = (id: string, status: ScheduledBooking['status']) => {
    setAppointments((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  const deleteAppointment = (id: string) => {
    setAppointments((prev) => prev.filter((item) => item.id !== id));
  };

  const addCalculatorLead = (lead: Omit<CalculatorLead, 'id' | 'date'>) => {
    const newLead: CalculatorLead = {
      ...lead,
      id: 'calc-' + Date.now(),
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
    };
    setCalculatorLeads((prev) => [newLead, ...prev]);
  };

  const deleteCalculatorLead = (id: string) => {
    setCalculatorLeads((prev) => prev.filter((item) => item.id !== id));
  };

  const addProject = (project: Omit<ProjectVideo, 'id'>) => {
    const newProj: ProjectVideo = {
      ...project,
      id: 'proj-' + Date.now(),
    };
    setProjects((prev) => [newProj, ...prev]);
  };

  const updateProject = (id: string, updated: Partial<ProjectVideo>) => {
    setProjects((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((item) => item.id !== id));
  };

  const addBlog = (blog: Omit<BlogPost, 'id'>) => {
    const newBlog: BlogPost = {
      ...blog,
      id: 'blog-' + Date.now(),
    };
    setBlogs((prev) => [newBlog, ...prev]);
  };

  const updateBlog = (id: string, updated: Partial<BlogPost>) => {
    setBlogs((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteBlog = (id: string) => {
    setBlogs((prev) => prev.filter((item) => item.id !== id));
  };

  const addReview = (review: Omit<Review, 'id'>) => {
    const newRev: Review = {
      ...review,
      id: 'rev-' + Date.now(),
    };
    setReviews((prev) => [newRev, ...prev]);
  };

  const updateReview = (id: string, updated: Partial<Review>) => {
    setReviews((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteReview = (id: string) => {
    setReviews((prev) => prev.filter((item) => item.id !== id));
  };

  const updateCompanyContact = (contact: Partial<CompanyContactState>) => {
    setCompanyContact((prev) => ({ ...prev, ...contact }));
  };

  const resetToDefaults = () => {
    setInquiries(INITIAL_INQUIRIES);
    setAppointments(INITIAL_APPOINTMENTS);
    setCalculatorLeads(INITIAL_CALCULATOR_LEADS);
    setProjects(FEATURED_PROJECTS);
    setBlogs(BLOG_POSTS);
    setReviews(CLIENT_REVIEWS);
    setCompanyContact(COMPANY_CONTACT);
    localStorage.clear();
  };

  return (
    <AdminDataContext.Provider
      value={{
        inquiries,
        addInquiry,
        updateInquiryStatus,
        deleteInquiry,
        appointments,
        addAppointment,
        updateAppointmentStatus,
        deleteAppointment,
        calculatorLeads,
        addCalculatorLead,
        deleteCalculatorLead,
        projects,
        addProject,
        updateProject,
        deleteProject,
        blogs,
        addBlog,
        updateBlog,
        deleteBlog,
        reviews,
        addReview,
        updateReview,
        deleteReview,
        companyContact,
        updateCompanyContact,
        resetToDefaults,
      }}
    >
      {children}
    </AdminDataContext.Provider>
  );
};

export const useAdminData = () => {
  const context = useContext(AdminDataContext);
  if (!context) {
    throw new Error('useAdminData must be used within an AdminDataProvider');
  }
  return context;
};
