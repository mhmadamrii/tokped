/**
 * v0 by Vercel.
 * @see https://v0.dev/t/J7t1QnrDb4R
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Component() {
  return (
    <>
      <header className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white shadow-md">
        <Link className="flex items-center" href="#">
          <LogInIcon className="mr-2 h-6 w-6" />
          <span className="text-lg font-bold">Marketplace</span>
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          <Link className="hover:underline" href="#">
            Features
          </Link>
          <Link className="hover:underline" href="#">
            Benefits
          </Link>
          <Link className="hover:underline" href="#">
            Pricing
          </Link>
          <Link className="hover:underline" href="#">
            Contact
          </Link>
        </nav>
        <Button variant="primary">Login</Button>
      </header>
      <main>
        <section className="bg-gray-900 py-20 text-white md:py-32">
          <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2 md:px-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold md:text-5xl">
                Discover the best products in our Marketplace
              </h1>
              <p className="text-lg text-gray-300">
                Browse through thousands of high-quality products from trusted
                sellers.
              </p>
              <div className="flex space-x-4">
                <Button variant="primary">Get Started</Button>
                <Button variant="secondary">Learn More</Button>
              </div>
            </div>
            <div>
              <img
                alt="Marketplace"
                className="rounded-lg shadow-lg"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
          </div>
        </section>
        <section
          className="bg-gray-100 py-20 md:py-32 dark:bg-gray-800"
          id="features"
        >
          <div className="container mx-auto space-y-12 px-4 md:px-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Features</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Discover the powerful features that make our marketplace stand
                out.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
                <SearchIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-xl font-bold">Powerful Search</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Find exactly what you're looking for with our advanced search
                  capabilities.
                </p>
              </div>
              <div className="space-y-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
                <UserCheckIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-xl font-bold">Verified Sellers</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Buy with confidence from our carefully vetted and trusted
                  sellers.
                </p>
              </div>
              <div className="space-y-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
                <LockIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-xl font-bold">Secure Payments</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Enjoy a safe and seamless checkout process with our secure
                  payment options.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32" id="benefits">
          <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2 md:px-8">
            <div>
              <img
                alt="Benefits"
                className="rounded-lg shadow-lg"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">Benefits</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Discover the many benefits of using our marketplace.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <SaveIcon className="mt-1 h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <div>
                    <h3 className="text-xl font-bold">Competitive Prices</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Find the best deals and save money on high-quality
                      products.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <ShoppingCartIcon className="mt-1 h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <div>
                    <h3 className="text-xl font-bold">Fast Delivery</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Enjoy quick and reliable shipping to your doorstep.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <HandHelpingIcon className="mt-1 h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <div>
                    <h3 className="text-xl font-bold">Dedicated Support</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Get assistance from our knowledgeable customer support
                      team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-gray-100 py-20 md:py-32 dark:bg-gray-800"
          id="pricing"
        >
          <div className="container mx-auto space-y-12 px-4 md:px-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Pricing</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Choose the plan that best fits your needs.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>Perfect for individuals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold">$9</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      <span>Access to all products</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      <span>Basic support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <XIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      <span>Advanced features</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="primary">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>Perfect for businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      <span>Access to all products</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      <span>Advanced support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      <span>Advanced features</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="primary">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>
                    Perfect for large organizations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      <span>Access to all products</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      <span>Dedicated support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      <span>Advanced features</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="primary">Get Started</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32" id="contact">
          <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2 md:px-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">Contact Us</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Get in touch with our team for more information.
              </p>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      type="text"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" />
                </div>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </form>
            </div>
            <div>
              <img
                alt="Contact"
                className="rounded-lg shadow-lg"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-8 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:px-8">
          <div className="flex items-center">
            <LogInIcon className="mr-2 h-6 w-6" />
            <span className="text-lg font-bold">Marketplace</span>
          </div>
          <nav className="mt-4 flex space-x-6 md:mt-0">
            <Link className="hover:underline" href="#">
              Terms of Service
            </Link>
            <Link className="hover:underline" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:underline" href="#">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function HandHelpingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
      <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 13 6 6" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function LogInIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}

function SaveIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
      <path d="M7 3v4a1 1 0 0 0 1 1h7" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UserCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
