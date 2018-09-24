# Siberite

http://siberite.org

## Notes

The concept of durable, named cursors is an improvement over Kafka's.
Unclear if history is maintaned indefinitely, until a configurable TTL, or removed after ack on all cursors.

Compared to NSQ:
- conceptually queue ~= topic and cursor ~= channel
- behavior of multi-consumor uncertain
- scalable via partitioning, but no the lack of a built-in discovery mechanism makes NSQ the superior option

