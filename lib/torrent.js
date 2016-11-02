/**
 * Creates a Torrent
 *
 * @param {Array} properties - array of properties
 */
function Torrent(properties) {
    // Invokes with new if called without
    if (false === (this instanceof Torrent)) {
	return new Torrent(properties);
    }
    this.hash = properties[0];
    this.name = properties[1];
    this.date = properties[2];
    this.size = properties[3];
    this.completed = properties[4];
    this.left = properties[5];
    this.up = properties[6];
    this.path = properties[7];
    this.directory = properties[8];
    this.down_rate = properties[9];
    this.up_rate = properties[10];
    this.peers = properties[11];
    this.seeders = properties[12];
    this.ratio = properties[13];
    this.state = properties[14];
    this.message = properties[15];
    this.is_active = properties[16];
    this.is_open = properties[17];
    this.nb_files = properties[18];
    this.nb_trackers = properties[19];
    this.view = properties[20];
}

/**
 * Creates an array with the methods to initialize a Torrent
 *
 * @return {Array}
 */
Torrent.properties = function() {
    return ['d.get_hash',
	    'd.get_base_filename',
	    'd.timestamp.started',
	    'd.get_size_bytes',
	    'd.get_completed_bytes',
	    'd.get_left_bytes',
	    'd.get_up_total',
	    'd.get_base_path',
	    'd.get_directory_base',
	    'd.get_down_rate',
	    'd.get_up_rate',
	    'd.get_peers_accounted',
	    'd.get_peers_complete',
	    'd.get_ratio',
	    'd.get_state',
	    'd.get_message',
	    'd.is_active',
	    'd.is_open',
	    'd.get_size_files',
	    'd.get_tracker_size',
	    'd.views'
	   ];
}

module.exports = Torrent;
