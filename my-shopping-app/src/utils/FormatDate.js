import { DateTime } from 'luxon';

export default function formatDate(date) {
    const dt = DateTime.fromJSDate(date).setZone('Asia/Bangkok'); // Asia/Bangkok is GMT+7
    return dt.toFormat('yyyyMMdd');
}
