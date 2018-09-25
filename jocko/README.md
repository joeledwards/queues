# Jocko

https://github.com/travisjeffery/jocko

## Notes

A Kafka clone written in Go with Serf (discovery) and Raft (consensus) integrated so there are no external dependencies.

Missing some features of Kafka and will continue to lag behind a bit (doesn't have streams yet; replication is a WiP).

The upside is simplicity. However, by not keeping the coordination store separate (a la, etcd, consule, zookeeper), it must scale up also.

