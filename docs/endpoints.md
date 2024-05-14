
1. **User Authentication Endpoints:**
   - `/register`: POST endpoint for user registration.
   - `/login`: POST endpoint for user login.
   - `/logout`: POST endpoint for user logout.

2. **Device Management Endpoints:**
   - `/devices`:
     - GET: Retrieve all devices associated with the user.
     - POST: Add a new device.
   - `/devices/{device_id}`:
     - GET: Retrieve details of a specific device.
     - PUT: Update device information.
     - DELETE: Remove a device.

3. **Schedule Management Endpoints:**
   - `/schedules`:
     - GET: Retrieve all schedules created by the user.
     - POST: Create a new schedule.
   - `/schedules/{schedule_id}`:
     - GET: Retrieve details of a specific schedule.
     - PUT: Update schedule information.
     - DELETE: Remove a schedule.

4. **Real-time Communication Endpoints:**
   - `/ws`: WebSocket endpoint for real-time communication with devices.
   - `/events`: POST endpoint for receiving device events and updating device states.

5. **Data Logging and Analytics Endpoints:**
   - `/logs`:
     - GET: Retrieve log entries for monitoring and analysis purposes.
     - POST: Add new log entries.

6. **User Profile Endpoints:**
   - `/profile`:
     - GET: Retrieve user profile information.
     - PUT: Update user profile details.
     - DELETE: Delete user account.

7. **Admin Endpoints:**
   - `/admin/devices`:
     - GET: Retrieve all devices registered in the system.
     - POST: Add a new device (admin-only).
   - `/admin/users`:
     - GET: Retrieve all users registered in the system (admin-only).
     - POST: Add a new user (admin-only).

