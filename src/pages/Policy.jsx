import { motion } from "framer-motion";

export default function Policy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >

        <title>Cancellation and Refund Policy | Muslim Psychologist</title>
        <meta
          name="description"
          content="Our cancellation and refund policy for counseling services"
        />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Cancellation and Refund Policy
          </h1>
          <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white shadow overflow-hidden sm:rounded-lg"
        >
          <div className="px-4 py-5 sm:p-6">
            <div className="prose prose-indigo max-w-none">
              <h2 className="text-xl font-semibold text-gray-800">
                Cancellation Policy
              </h2>
              <p className="mt-4 text-gray-600">
                We understand that unanticipated events happen occasionally in
                everyone's life. In our desire to be effective and fair to all
                clients, the following policies are honored:
              </p>

              <ul className="mt-4 space-y-3 list-disc pl-5 text-gray-600">
                <motion.li
                  whileHover={{ scale: 1.02 }}
                  className="pl-2"
                >
                  24 hour advance notice is required when cancelling an
                  appointment. This allows the opportunity for someone else to
                  schedule an appointment.
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.02 }}
                  className="pl-2"
                >
                  If you are unable to give 24 hours advance notice you will be
                  charged the full amount of your appointment.
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.02 }}
                  className="pl-2"
                >
                  This amount must be paid prior to your next scheduled
                  appointment.
                </motion.li>
              </ul>

              <h2 className="mt-8 text-xl font-semibold text-gray-800">
                No-shows
              </h2>
              <p className="mt-4 text-gray-600">
                Anyone who either forgets or consciously chooses to forgo their
                appointment for whatever reason will be considered a "no-show".
              </p>
              <p className="mt-2 text-gray-600">
                They will be charged for their "missed" appointment and future
                service will be denied until payment is made.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-gray-800">
                Late Arrivals
              </h2>
              <p className="mt-4 text-gray-600">
                If you arrive late, your session may be shortened in order to
                accommodate others whose appointments follow yours. Depending
                upon how late you arrive, your therapist will then determine if
                there is enough time remaining to start a treatment.
              </p>
              <p className="mt-2 text-gray-600">
                Regardless of the length of the treatment actually given, you
                will be responsible for the full session.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-gray-800">
                Refund Policy
              </h2>
              <p className="mt-4 text-gray-600">
                If you have paid for a session in advance and need to cancel
                with at least 24 hours notice, you will be eligible for a full
                refund.
              </p>
              <p className="mt-2 text-gray-600">
                Refunds will be processed within 5-7 business days and will be
                credited back to the original payment method.
              </p>
              <p className="mt-2 text-gray-600">
                No refunds will be given for no-shows or cancellations with less
                than 24 hours notice.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-gray-800">
                Exceptions
              </h2>
              <p className="mt-4 text-gray-600">
                In cases of emergency or exceptional circumstances (such as
                hospitalization, death in the family, etc.), please contact us
                as soon as possible. We will review these situations on a
                case-by-case basis and may make exceptions to our standard
                cancellation policy.
              </p>

              <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
                <h3 className="text-lg font-medium text-indigo-800">
                  Need to cancel or reschedule?
                </h3>
                <p className="mt-2 text-indigo-700">
                  Please contact us at least 24 hours before your scheduled
                  appointment time.
                </p>
                <p className="mt-2 text-indigo-700">
                  Email:{" "}
                  <a
                    href="mailto:info@muslimpsychologist.org"
                    className="underline hover:text-indigo-900"
                  >
                    info@muslimpsychologist.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center text-gray-500 text-sm"
        >
          <p>Last updated: [Insert Date]</p>
        </motion.div>
      </div>
    </motion.div>
  );
}